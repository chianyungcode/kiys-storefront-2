import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileImage = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {
          method: "POST",
          credentials: "include", // Agar cookie di browser terbawa saat mengirim request logout, tanpa ini tidak akan berjalan
        }
      );

      console.log(response.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-10 h-10 rounded-full border border-black overflow-hidden">
          <img
            src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Jasmine"
            alt="avatar"
            className="object-cover h-full w-full"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" sideOffset={10}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>My profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileImage;
