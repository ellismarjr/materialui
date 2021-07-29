import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, FormControl, IconButton, InputAdornment } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box bgcolor="#fff" display="flex" width="348px" height="268px">

          <form noValidate autoComplete="off" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
            <TextField style={{
              width: '280px',
              marginBottom: '16px',
            }} id="standard-basic" label="E-mail" />

            <FormControl>
              <InputLabel htmlFor="senha">Senha</InputLabel>
              <Input
                style={{
                  width: '280px',
                  marginBottom: '32px',
                }}
                id="senha"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button style={{
              width: '280px'
            }} size="large" variant="contained" color="secondary">
              Entrar
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}