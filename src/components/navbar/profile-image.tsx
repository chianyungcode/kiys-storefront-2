const ProfileImage = () => {
  return (
    <div className="w-10 h-10 rounded-full border border-black overflow-hidden">
      <img
        src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Jasmine"
        alt="avatar"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default ProfileImage;
