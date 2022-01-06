export const roles = window && window.apps && window.apps.user_roles && window.apps.user_roles.length ? window.apps.user_roles : [];

export const isEditor = () => {
  if(!roles.length) {
    return true;
  }

  return roles.includes('administrator') || roles.includes('manager') || roles.includes('editor');
}

export const isManager = () => {
  if(!roles.length) {
    return true;
  }

  return roles.includes('administrator') || roles.includes('manager');
}

export const isAdmin = () => {
  if(!roles.length) {
    return true;
  }

  return roles.includes('administrator');
}