import React from 'react'
// @form
import { Controller } from 'react-hook-form'
import type { ControllerProps, Control, FieldError } from 'react-hook-form'
// @mui
import TextField from '@mui/material/TextField'
import type { TextFieldProps } from '@mui/material/TextField'

interface Props {
  controllerProps: {
    control: Control<any>
  } & Omit<ControllerProps, 'control' | 'render'>
  textFieldProps: TextFieldProps
  error?: FieldError
}

const FormTextField = ({ controllerProps, textFieldProps, error }: Props) => {
  return (
    <Controller
      {...controllerProps}
      render={({ field }) => (
        <TextField
          error={Boolean(error)}
          helperText={error ? error.message : null}
          {...field}
          {...textFieldProps}
        />
      )}
    />
  )
}

export default FormTextField
