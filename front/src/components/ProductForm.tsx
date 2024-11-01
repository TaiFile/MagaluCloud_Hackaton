export interface ProductForm {
  title: string;
}

export function ProductForm({ title }: ProductForm) {
  return (
    <div className="bg-[#26283C] flex flex-col gap-7">
      <h2 className="text-white">{title}</h2>
    </div>
  );
}
