﻿import styled from 'styled-components';
import * as color from '../../config/colors';

export const Title = styled.h1`
  background: green;
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragraph = styled.p`
  font-size: 60pt;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    &:focus {
      box-shadow: 0 0 3px ${color.primaryColor};
    }
  }
  p {
    color: red;
    font-size: 12px;
    margin-top: 2px;
  }
  button {
    margin-top: 20px;
  }
`;
