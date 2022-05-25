interface IUser {
  id: number;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
}

export const getUserName = (user: IUser): string => {
  if (!user.firstName && !user.lastName) return user.email;
  return `${user.firstName || ''} ${user.lastName || ''}`.trim();
};
