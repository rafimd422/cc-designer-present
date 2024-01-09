import Image from "next/image"

const Card = () => {
  return (
<div className="flex flex-col max-w-lg md:p-5 p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900">
	<div className="flex space-x-3">
    <Image
      alt="Designer Name"
      src=""
      width={100}
      height={100}
      className="object-cover w-12 h-12 rounded-full shadow dark:dark:bg-gray-500"
    />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
			<span className="text-xs dark:dark:text-gray-400">Graphics Designer || Organisor || Cultural Clasistists</span>
		</div>
	</div>
	<div>
        <Image src={''}
        width='100'
        height={'100'}
        alt="The Art By Designer"
        className="w-full mb-4 h-60 sm:h-96 object-cover" />
		<h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
		<p className="text-sm dark:dark:text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
	</div>
</div>
  )
}

export default Card
