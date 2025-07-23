type ProfileCardProps = {
  name: string;
  nim: string;
  prodi?: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  const { name = 'Anonymus', nim, prodi = false } = props;

  return (
    <>
      <div className="card">
        <p>Name : {name}</p>
        <p>NIM : {nim}</p>
        {props && <p>Prodi: {prodi} </p>}
      </div>
    </>
  );
};

export default ProfileCard;
