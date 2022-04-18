const TextArea = ({ disabled, id, name, placeholder, className, dataAos, dataAosDelay, onChange }) => {
  return (
		<div data-aos-offset='650' data-aos={dataAos || ""} data-aos-delay={dataAosDelay || ""} data-aos-anchor='#contact' className="ltr:text-left rtl:text-right mb-4">
			<label htmlFor={id} className="inline-block mb-1 text-sm text-gray-800 dark:text-gray-200">{ name }</label>
			<textarea
				disabled={disabled}
				className={` block w-full px-4 py-2.5 text-sm font-normal text-gray-800 dark:text-gray-200 bg-slate-200 dark:bg-bg-dark bg-clip-padding border border-solid border-blue-600 rounded transition ease-in-out hover:border-cyan dark:focus:text-gray-100 focus:border-cyan focus:outline-none ${className || ''}`}
				onChange={(event) => onChange(event.target.value)}
				placeholder={placeholder}
				id={id}
			/>
		</div>
  )
}

export default TextArea