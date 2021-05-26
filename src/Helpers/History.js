//lý do xử dung bộ định tuyến bên ngoài thay vị bộ tích hợp
//là để được phép chuyển hướng các thành phần bên ngoài React
//ví dụ như đăng xuất
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();