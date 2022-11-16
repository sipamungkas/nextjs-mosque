import Link from "next/link";

interface ButtonProps {
  title: string;
  type: "filled" | "ghost";
  disabled?: boolean;
  isLoading?: boolean;
  href?: string;
  onPress?: Function;
  className?: string;
  id?: string;
}

const Button = (props: Partial<ButtonProps>) => {
  const { type, title, disabled, isLoading, href = "/", className, id } = props;

  if (type === "ghost") {
    return (
      <Link
        href={href}
        className={`bg-tranparent text-primary-black hover:text-primary-blue px-4 py-2 rounded-full text-lg outline-none ${className}`}
        id={id}
      >
        {title}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`bg-tranparent text-primary-blue hover:bg-primary-blue hover:text-white px-4 py-2 rounded-full text-lg border-2 border-primary-blue outline-none hover:border-primary-blue ease-in-out duration-300 ${className}`}
      id={id}
    >
      {title}
    </Link>
  );
};

export default Button;
