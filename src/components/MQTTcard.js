import React from 'react';
import styled from 'styled-components';
import {useEffect, useState} from 'react'
import mqtt from 'mqtt'

import {Button} from "./Button"
import {FormInputField} from "./FormInputField"

import {useFormFields} from "../hooks/inputHooks"


const host = 'wss://172.20.10.4'

export const MQTTcard = () => {
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState("")
  const [payload, setPayload] = useState("")


  const[fields, handleFieldChange] = useFormFields({
    message: "",
  })

  const handlePublish = () => {
    if (client.connected===true) {
      client.publish('deadeye/receiveCommands', fields.message)
    }
    console.log(connectStatus)
    console.log(payload)
  }

  const handleConnect = () => {
    const options = {
      clientId: "mqttjs1",
      port: 9001,
      useSSL: true,
      username: 'deadeye',
      password: 'deadeye',
    }
    setConnectStatus("Connecting")
    setClient(mqtt.connect(host, options))
  }

  const handleDisconnect = () => {
    if (client.connected===true) {
      client.end()
    }
  }

  useEffect(() => {
    if (client) {
      console.log(client)
      client.on('connect', () => {
        console.log("Successful Connection")
        setConnectStatus('Connected');
      });
      client.on('error', (err) => {
        console.error('Connection error: ', err);
        client.end();
      });
      client.on('reconnect', () => {
        setConnectStatus('Reconnecting');
      });
      client.on('message', (topic, message) => {
        const payload = { topic, message: message.toString() };
        setPayload(payload);
      });
    }
  }, [client]);


  return(
    <>
      <MQTTcardDiv>
        <FormInputField
          placeholder='message'
          id='message'
          value={fields.message}
          handleChange={handleFieldChange}/>
        <Button label="Send" onClick={handlePublish}/>
        <Button label="Conn" onClick={handleConnect}/>
        <Button label="Disconnect" onClick={handleDisconnect}/>
      </MQTTcardDiv>
    </>
  )



}


const MQTTcardDiv = styled.div`
  height: 450px;
  width: 80%;
  background: #FFFFFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

