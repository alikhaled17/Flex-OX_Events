import React from 'react'
import Form from 'react-bootstrap/Form'

export default function SelectBox() {
  return (
    <Form.Select >
        <option>Workplaces</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
  )
}
