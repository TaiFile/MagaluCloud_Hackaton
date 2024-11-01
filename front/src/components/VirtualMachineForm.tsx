import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RadioGroup from "./RadioGroup";
import { z } from "zod";

// Definindo o enum para os sistemas operacionais
export enum OperatingSystem {
  Ubuntu = "Ubuntu",
  Oracle = "Oracle",
  Rocky = "Rocky",
  Debian = "Debian",
  Opensuse = "Opensuse",
  Fedora = "Fedora",
  Windows = "Windows",
}

// Atualizando o schema para usar o enum
export const virtualMachineDTOSchema = z.object({
  operationSystem: z.nativeEnum(OperatingSystem),
});

export interface ProductForm {
  title: string;
}

// Tipo inferido do schema
export type virtualMachineDTO = z.infer<typeof virtualMachineDTOSchema>;

export function VirtualMachineForm({ title }: ProductForm) {
  const {
    control,
    trigger,
  } = useForm<virtualMachineDTO>({
    mode: "all",
    resolver: zodResolver(virtualMachineDTOSchema),
  });

  return (
    <div className="bg-[#26283C] flex flex-col gap-7 h-60 p-5">
      <h2 className="text-white">{title}</h2>
      <RadioGroup
        control={control}
        trigger={trigger}
        name="operationSystem"
        label="Sistema Operacional"
        options={[
          { value: OperatingSystem.Ubuntu, label: "Ubuntu" },
          { value: OperatingSystem.Oracle, label: "Oracle" },
          { value: OperatingSystem.Rocky, label: "Rocky" },
          { value: OperatingSystem.Debian, label: "Debian" },
          { value: OperatingSystem.Opensuse, label: "Opensuse" },
          { value: OperatingSystem.Fedora, label: "Fedora" },
          { value: OperatingSystem.Windows, label: "Windows" },
        ]}
      />
    </div>
  );
}
