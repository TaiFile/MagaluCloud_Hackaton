import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RadioGroup from "./RadioGroup";
import { z } from "zod";
import Input from "./Input";

export interface ProductForm {
  title: string;
}

export enum profile {
  Private = "Private",
  Public = "Public",
}

export const profileDTOSchema = z.object({
  profile: z.nativeEnum(profile),
});

export type profileDTO = z.infer<typeof profileDTOSchema>;

export function ObjectStorageForm({ title }: ProductForm) {
  const {
    control,
    formState: { errors, isValid },
    trigger,
  } = useForm<profileDTO>({
    mode: "all",
    resolver: zodResolver(profileDTOSchema),
  });

  return (
    <div className="bg-[#26283C] flex flex-col gap-7 h-80 p-5">
      <h2 className="text-white">{title}</h2>
      <RadioGroup
        control={control}
        trigger={trigger}
        name="profile"
        label="Sistema Operacional"
        options={[
          { value: profile.Private, label: "Private" },
          { value: profile.Public, label: "Public" },
        ]}
      />
      <div className="w-full">
        <Input label="Bucket Name" id={""} name={""}></Input>
      </div>
    </div>
  );
}
