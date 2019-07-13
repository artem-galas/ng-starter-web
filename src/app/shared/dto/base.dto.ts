export interface BaseDto {
  id: string;
}

export interface BaseDtoCollection<T extends BaseDto> {
  data: Array<T>;
  total: number;
}
