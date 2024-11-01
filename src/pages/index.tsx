import { useState } from "react";
import Button from "@/components/Button";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
  ProductForm,
  VirtualMachineForm,
} from "@/components/VirtualMachineForm";
import { DatabaseForm } from "@/components/DatabaseForm";
import { ObjectStorageForm } from "@/components/ObjectStore";

export default function Home() {
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

  const handleButtonClick = (template: string) => {
    setSelectedTemplates((prev) =>
      prev.includes(template)
        ? prev.filter((t) => t !== template)
        : [...prev, template]
    );
  };

  const handleGenerateClick = async () => {
    if (selectedTemplates.length > 0) {
      const zip = new JSZip();
      for (const template of selectedTemplates) {
        const response = await fetch(`/templates/${template}.tf`);
        const text = await response.text();
        zip.file(`${template}.tf`, text);
      }
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "templates.zip");
    } else {
      alert("Por favor, selecione pelo menos um template.");
    }
  };

  return (
    <div
      className={`bg-[#202647] flex flex-col items-center w-screen min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <header
        className={`w-full flex bg-[#14151E] justify-between items-center`}
      >
        <div className="flex justify-center items-center">
          <p className="text-white text-xl m-5">SpiderCode</p>
          <img className="size-8" src="/cloud.svg" alt="" />
        </div>

        <img src="/terraform.svg" className="size-24" alt="" />
      </header>
      <div
        className={`text-white flex flex-col justify-center items-center mt-32 gap-5 transition-all ease-in-out duration-200 ${
          selectedTemplates.length == 0
            ? ""
            : "-translate-y-16 opacity-0 hidden"
        }`}
      >
        <h1 className="text-3xl font-bold">Generate your Terraform code</h1>
        <p className="text-base">
          Select the essential products to build your infrastructure: Virtual
          Machine for computing power, Database for reliable data management or
          Object Store for scalable storage.
        </p>
      </div>

      <div
        className={`flex justify-between gap-32 transition-all ease-in-out duration-200 mt-20`}
      >
        <div className="flex flex-col gap-2">
          <Button
            size="big"
            type="button"
            filled={selectedTemplates.includes("virtual-machine")}
            onClick={() => handleButtonClick("virtual-machine")}
          >
            <div className="flex justify-center items-center gap-2">
              <img src="/computer.svg" alt="" />
              Virtual Machine
            </div>
          </Button>
          {selectedTemplates.includes("virtual-machine") && (
            <VirtualMachineForm title={"System Operation"}></VirtualMachineForm>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Button
            size="big"
            type="button"
            filled={selectedTemplates.includes("database")}
            onClick={() => handleButtonClick("database")}
          >
            <div className="flex justify-center items-center gap-2">
              <img src="/db.svg" alt="" />
              Banco de dados
            </div>
          </Button>
          {selectedTemplates.includes("database") && (
            <DatabaseForm title={"System Operation"}></DatabaseForm>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Button
            size="big"
            type="button"
            filled={selectedTemplates.includes("object-storage")}
            onClick={() => handleButtonClick("object-storage")}
          >
            <div className="flex justify-center items-center gap-2">
              <img src="/profile.svg" alt="" />
              Object Storage
            </div>
          </Button>
          {selectedTemplates.includes("object-storage") && (
            <ObjectStorageForm title={"Object Strorage"}></ObjectStorageForm>
          )}
        </div>
      </div>
      <div className={`${selectedTemplates.length == 0 ? "mt-28" : "mt-24"} `}>
        <Button size="big" type="button" onClick={handleGenerateClick}>
          Gerar
        </Button>
      </div>
      <footer className="bg-[#14151E] absolute bg-roxo-900 bottom-0 flex w-screen items-center justify-center gap-16 p-4 px-44">
        <img className="size-16" src="/miranha.svg" alt="" />
      </footer>
    </div>
  );
}
