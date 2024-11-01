import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RadioGroup from "./RadioGroup";
import { z } from "zod";

export interface ProductForm {
  title: string;
}

export enum size {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum database {
  MySQL = "MySQL",
}

export const databaseDTOSchema = z.object({
  database: z.enum([database.MySQL]),
  size: z.nativeEnum(size),
});

export type databaseDTO = z.infer<typeof databaseDTOSchema>;

export function DatabaseForm({ title }: ProductForm) {
  const {
    control,
    trigger,
  } = useForm<databaseDTO>({
    mode: "all",
    resolver: zodResolver(databaseDTOSchema),
  });

  return (
    <div className="bg-[#26283C] flex flex-col gap-7 h-60 p-5">
      <h2 className="text-white">{title}</h2>
      <RadioGroup
        control={control}
        trigger={trigger}
        name="operationSystem"
        label="Sistema Operacional"
        options={[{ value: database.MySQL, label: "MySQL" }]}
      />
      <div>
        <RadioGroup
          control={control}
          trigger={trigger}
          name="operationSystem"
          label="Banco de dados"
          options={[
            { value: size.Small, label: "Small" },
            { value: size.Medium, label: "Medium" },
            { value: size.Large, label: "Large" },
          ]}
        />
      </div>
    </div>
  );
}
