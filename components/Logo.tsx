import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2 font-bold">
      <Image
        className="object-cover mx-2"
        height={50}
        width={50}
        src="/bicycle.png"
        alt="logo"
      />
      Content Studio
    </div>
  );
}

export default Logo;
