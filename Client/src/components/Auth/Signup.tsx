import { Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import CustomTextField from "../../Custom/CustomTextField";
import CustomButton from "../../Custom/CustomButton";
import useAuth from "../../hooks/useAuth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signup = () => {
    const theme = useTheme();
    const {handleSignup, handleSignupDataChange,signupData, loading}=useAuth();
    
      return (
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            container
            flexDirection="column"
            gap={2}
            sx={{ width: { xs: "300px", sm: "400px", md: "500px" } }}
            component={Paper}
            variant="elevation"
            p={{ xs: 2, sm: 4, md: 8 }}
          >
            <Typography variant="h5" color={theme.palette.text.secondary}>
              Sign Up
            </Typography>
            <CustomTextField
          label="Full Name"
          required
          value={signupData?.fullName}
          size="small"
          placeholder="Full Name"
          name="fullName"
          type="text"
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            handleSignupDataChange({
              key: "fullName",
              value: event.target.value,
            });
          }}
        />
            <CustomTextField
             value={signupData?.email}
              label="Email"
              required
              size="small"
              placeholder="Enter your email"
              type="email"
              onChange={function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
                handleSignupDataChange({ key: "email", value: event.target.value });
              }
              }
            />
                <CustomTextField
          label="Password"
          required
          value={signupData?.password}
          size="small"
          placeholder="Enter your password"
      
          type={signupData?.showP ? "text" : "password"}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            handleSignupDataChange({
              key: "password",
              value: event.target.value,
            });
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  handleSignupDataChange({
                    key: "showP",
                    value: !signupData?.showP,
                  });
                }}
              >
                {signupData?.showP ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
               <CustomTextField
               value={signupData?.cPassword}
              label="Confirm Password"
              required
              size="small"
              type={signupData?.showCP ? "text":"password"}
              placeholder="Confirm your password"
              onChange={function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
                handleSignupDataChange({ key: "cPassword", value: event.target.value });
              }
              }
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => {
                    handleSignupDataChange({
                      key: "showCP",
                      value: !signupData?.showCP,
                    });
                  }}>
                    {signupData?.showCP ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}

            />
            <CustomButton loading={loading==='signup'} disabled={loading==='signup'} variant="contained"
            onClick={()=>{handleSignup();}}
            >Sign Up</CustomButton>
          </Grid>
        </Grid>
      );
    };
    

export default Signup