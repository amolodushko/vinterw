export interface IData {
  id: string;
  company: string[] | null;
  location: { country: string; city: string };
}
