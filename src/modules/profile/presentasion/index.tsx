import ProfileProvider from './context/provider';
import UI from './view';

const ProfilePage = () => {
  return (
    <ProfileProvider>
      <UI />
    </ProfileProvider>
  );
};
export default ProfilePage;
