import Select from 'react-select'

export default function FontColourChanger (props) {
      const handleFontChange = (selectedOption) => {
        const color = selectedOption.value;
        props.onFontChange(color)
        localStorage.setItem('fontColor', color)
      }

      const fontOptions = [
        {value: 'black', label: 'black'},
        {value: 'white', label: 'white'},
        {value: 'navy', label: 'navy'},
        {value: 'red', label: 'red'}
      ]
     
  return (
    <div>
        <Select className='colour-dropdown' options={fontOptions} onChange={handleFontChange}/>
    </div>
  )
}