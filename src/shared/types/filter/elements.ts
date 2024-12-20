import * as Types from "@/shared/types";

export type DateFilterKeys = keyof Pick<
  Types.Filter.Filters,
  "arrival_time" | "departure_time" | "created_at" | "updated_at"
>;

export type TextFilterKeys = keyof Pick<
  Types.Filter.Filters,
  "departure_from" | "destination" | "flight_number" | "q"
>;

export type FilterElementNamesTypes = "date-field" | "text-field";

export type FilterElementMixin<T extends FilterElementNamesTypes> =
  T extends "date-field" ? DateFilterKeys : TextFilterKeys;

export type FieldElementProps = {
  variant?:
    | "outlined"
    | "underlined"
    | "solo"
    | "solo-filled"
    | "solo-inverted";
};

export type FilterTextItem = {
  component: "text-field";
  filterKey: TextFilterKeys;
};

export type FilterDateItem = {
  component: "date-field";
  filterKey: DateFilterKeys;
};

export type FiltersItem<T extends FilterElementNamesTypes> = {
  component: T;
  filterKey: FilterElementMixin<T>;
};

export type FiltersList = Array<
  Array<
    (FilterTextItem & FieldElementProps) | (FilterDateItem & FieldElementProps)
  >
>;
