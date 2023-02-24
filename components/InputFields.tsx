type InputFieldType = {
  label: string;
  value: string;
  handleBlur: any;
  handleChange: any;
  placeholder: string;
  name: string;
  selectField?: boolean;
};

const InputFields = ({
  label,
  value,
  handleBlur,
  handleChange,
  placeholder,
  name,
  selectField = false,
}: InputFieldType) => {
  const arr = new Array(100).fill(0).map((_, i) => i + 1);
  return (
    <div className="flex items-start flex-col gap-2 w-full md:w-[565px]">
      <label className="text-[14px] leading-[20px] text-bluePrim font-semibold">
        {label}
      </label>

      {!selectField ? (
        <div className="w-full">
          {name === "description" ? (
            <textarea
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={value}
              className="w-full h-[140px] py-2 text-bluePrim px-3 border border-greenPrim"
            />
          ) : (
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              name={name}
              className="w-full h-[40px] py-2 text-bluePrim px-3 border border-bluePrim rounded-[8px]"
            />
          )}
        </div>
      ) : (
        <select
          name={name}
          onChange={handleChange}
          value={value}
          className="w-full h-[40px] py-2 text-bluePrim px-3 border border-greenPrim cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {arr.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default InputFields;
