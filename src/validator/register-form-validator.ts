export function registerFormValidator(values: Record<string | number, any>) {
  let errors: any = {};
  let pwd = values.pwd;
  let cfPwd = values.cfPwd;
  let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  if (!values.email) {
    errors.email = '邮箱必须输入';
  } else if (!emailReg.test(values.email)) {
    errors.email = '请输入正确的邮箱格式';
  }
  if (!pwd) {
    errors.pwd = '请输入密码';
  } else if (!/\w{8,}/.test(pwd)) {
    errors.pwd = '密码至少为8位';
  }
  if (!cfPwd) {
    errors.cfPwd = '请输入确认密码';
  } else if (!/\w{8,}/.test(cfPwd)) {
    errors.cfPwd = '确认密码至少为8位';
  } else if (pwd !== cfPwd) {
    errors.cfPwd = '密码不一致';
  }
  return errors;
}
