type InputProps = {
  type?: 'number' | 'textbox' | 'text'
  onChangeValue?: (a: string) => void
  placeholder?: string
  wide?: boolean
}

export default function Input({
  type,
  onChangeValue,
  placeholder,
  wide,
}: InputProps) {
  if (type === 'textbox') {
    return (
      <textarea
        className={`bg-grey p-2 m-2 rounded-lg min-w-24
        ${wide ? 'w-full' : ''}`}
        onChange={
          onChangeValue
            ? (e) => {
                onChangeValue(e.target.value)
              }
            : undefined
        }
        placeholder={placeholder}
        rows={4}
      ></textarea>
    )
  } else {
    return (
      <input
        className={`bg-grey p-2 m-2 rounded-lg min-w-24
        ${wide ? 'w-full' : ''}`}
        type={type}
        onChange={
          onChangeValue
            ? (e) => {
                onChangeValue(e.target.value)
              }
            : undefined
        }
        placeholder={placeholder}
      />
    )
  }
}
