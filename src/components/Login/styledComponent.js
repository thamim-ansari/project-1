import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 400px;
    max-width: 450px;
  }
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  padding: 30px 15px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 45px 30px;
  }
`
export const LoginLogoImage = styled.img`
  align-self: center;
  width: 120px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 150px;
    margin-bottom: 40px;
  }
`
export const LoginFromContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`
export const FormLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const FormInput = styled.input`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#cbd5e1')};
  border-radius: 4px;
  padding-left: 15px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
`
export const ShowPasswordInput = styled.input`
  margin: 0px;
  height: 15px;
  width: 15px;
`
export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#181818')};
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 8px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: ${props => (props.isDarkTheme ? '#ff0b37' : '#ff0000')};
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
`
