import _ from "lodash";

export default function MultiSelect<T extends string | number>({
  id,
  className,
  selected = [],
  options,
  min,
  max,
  onChange,
}: {
  id: string;
  className: string;
  selected: T[];
  options: T[];
  min?: number;
  max?: number;
  onChange: (selected: T[]) => void;
}) {
  return (
    <div>
      <select
        id={id}
        className={className}
        disabled={max ? selected.length === max : false}
        value={undefined}
        onChange={(evt) => {
          const value = evt.target.value as T;
          const updated = _.uniq([...selected, value]);
          onChange(updated);
        }}
      >
        <option key="Select options" value={undefined}>
          Select options
        </option>
        {options
          .filter((o) => !selected.includes(o))
          .map((o) => (
            <option key={o}>{o}</option>
          ))}
      </select>
      <div className="mt-2 space-y-1">
        {selected.map((v) => (
          <span
            key={v}
            className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white"
          >
            <span>{v.toString()}</span>
            <span
              className="ml-4"
              onClick={() => {
                onChange(selected.filter((o) => o !== v));
              }}
            >
              &#x2715;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
