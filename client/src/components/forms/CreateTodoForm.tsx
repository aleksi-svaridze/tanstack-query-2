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
    <form onSubmit={onSubmit} className="mb-10">
      {fields.map((field) => (
        <div key={field.label} className="flex flex-col gap-1 mb-5">
          <label htmlFor={field.name} className="capitalize">
            {field.label}
          </label>
          <input
            className="py-2 px-4 border border-gray-300 outline-none"
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
