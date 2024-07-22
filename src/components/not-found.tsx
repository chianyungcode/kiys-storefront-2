import Container from "./ui/container";

const NotFound = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="h-96 flex justify-center text-4xl items-center font-sora font-semibold">
        {children}
      </div>
    </Container>
  );
};

export default NotFound;
