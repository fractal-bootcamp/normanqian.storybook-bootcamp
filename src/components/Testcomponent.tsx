type propsType = {
  id: number;
  name: string;
};

const Testcomponent = (props: propsType) => {
  return (
    <div>
      <div>
        testcomponent {props.id} {props.name}
      </div>
    </div>
  );
};

export default Testcomponent;
