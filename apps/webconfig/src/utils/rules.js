import * as Yup from 'yup';

export const YupString = Yup.string();
export const YupNumber = Yup.number('Must be a number');
export const RequiredString = YupString.required('Required');
export const RequiredNumber = YupNumber.required('Required');
export const RequiredStringUrl = YupString.required('Required').matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter a valid url');
export const StringUrl = YupString.matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter a valid url');
export const StringUrlStrict = YupString.url();
export const StringEmail = YupString.email();
