import Image from "next/image"

const Card3 = ({social}) => {

  const {name,authorImg, design, theme, title} = social
console.log(name)


  return (
<div className="flex flex-col max-w-lg md:p-5 p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900">
	<div className="flex space-x-3">
    <Image
      alt="Designer Name"
      src={authorImg}
      width={100}
      height={100}
      className="object-cover w-12 h-12 rounded-full shadow dark:dark:bg-gray-500"
    />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
			<span className="text-xs dark:dark:text-gray-400">Graphics Designer || Organisor || Cultural Clasistists</span>
		</div>
	</div>
	<div>
        <Image src={design}
        width='100'
        height={'100'}
        alt="The Art By Designer"
        className="w-full mb-4 h-60 sm:h-96 object-cover" />
		<h2 className="mb-1 text-xl font-semibold">{title}</h2>
		<p className="text-sm dark:dark:text-gray-400">{theme}</p>
	</div>
</div>
  )
}

export default Card3
