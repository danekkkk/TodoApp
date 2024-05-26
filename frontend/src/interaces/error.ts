export interface ErrorResponse {
    errors: ErrorDetail[];
    response: any;
}
  
interface ErrorDetail {
    message: string;
    extensions: ErrorExtensions;
  }
  
interface ErrorExtensions {
    code: string;
    field: string;
    type: string;
}
  