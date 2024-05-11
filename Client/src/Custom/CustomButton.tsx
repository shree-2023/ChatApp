import { Button, ButtonProps, CircularProgress } from "@mui/material";
interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}
const CustomButton = ({ loading, children, ...rest }: CustomButtonProps) => {
  return loading ? (
    <Button {...rest}>
      <CircularProgress size={20} />
    </Button>
  ) : (
    <Button {...rest}>{children}</Button>
  );
};

export default CustomButton;