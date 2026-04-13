import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import type { IFieldProp } from "../../interfaces/todo.interface";

interface CreateTodoFormProps {
  fields: IFieldProp[];
  action: (formData: Record<string, string>) => void;
  formBtn: ReactNode;
}

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({
  fields,
  action,
  formBtn,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    action(formData);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <div key={field.label}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type="text"
            placeholder={field.placeholder}
            id={field.name}
            name={field.name}
            onChange={handleChange}
          />
        </div>
      ))}

      {formBtn}
    </form>
  );
};

export default CreateTodoForm;
