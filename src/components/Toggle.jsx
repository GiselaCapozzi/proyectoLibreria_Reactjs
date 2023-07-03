import Switch from 'react-switch';

const Toggle = ({ handleSwitch, checked }) => {
  return (
    <>
      <Switch
            onChange={handleSwitch}
            checked={checked}
            handleDiameter={28}
            offColor="#E9EB9E"
            onColor="#000"
            offHandleColor="#fff"
            onHandleColor="#000"
            height={40}
            width={70}
            borderRadius={6}
            activeBoxShadow="0px 0px 1px 2px #fffc35"
            // checkedIcon={
            //   <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
            //     <circle r={3} cx={5} cy={5} />
            //   </svg>
            // }
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20,
                  color: '#000'
                }}
              >
                <i className={`bi bi-sun`}></i>
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "#E9EB9E",
                  fontSize: 18
                }}
              >
                <i className={`bi bi-moon`}></i>
              </div>
            }
            className="react-switch"
            id="small-radius-switch"

          />
    </>
  )
}

export default Toggle