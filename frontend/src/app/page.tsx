"use client"

import Accordion from "@test/Accordion"
import AccordionItem from "@test/Accordion/AccordionItem"
import AccordionButton from "@test/Accordion/AccordionButton"
import AccordionIcon from "@test/Accordion/AccordionIcon"
import AccordionPanel from "@test/Accordion/AccordionPanel"

import Tabs from "@test/Tabs"
import TabList from "@test/Tabs/TabList"
import Tab from "@test/Tabs/Tab"
import TabPanels from "@test/Tabs/TabPanels"
import TabPanel from "@test/Tabs/TabPanel"

import TextHidden from "@test/TextHidden"

import Alert from "@test/Alert"
import AlertTitle from "@test/Alert/AlertTitle"
import AlertDescription from "@test/Alert/AlertDescription"
import AlertIcon from "@test/Alert/AlertIcon"
import ProgressBar from "@test/ProgressBar"
import CircularProgressBar from "@test/ProgressBar/CircularProgressBar"

import Skeleton from "@test/Skeleton"
import SkeletonText from "@test/Skeleton/SkeletonText"
import SkeletonCircle from "@test/Skeleton/SkeletonCircle"

import Toast from "@test/Toast"

import Drawer from "@test/Drawer"
import DrawerCloseButton from "@test/Drawer/DrawerCloseButton"

import Menu from "@test/Menu"

import Modal from "@test/Modal"

import Badge from "@test/Badge"

import Divider from "@test/Divider"

import Tag from "@test/Tag"

import ImgTransition from "@test/ImgTransition"

import SimpleGallery from "@test/SimpleGallery"

import { useState } from "react"
import Image from "next/image"

export default function Home () {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  const [progressValue, setProgressValue] = useState(50);
  const [circularValue, setCircularValue] = useState(50);

  // Función para aumentar el valor de la barra de progreso horizontal
  const increaseProgressValue = () => {
    setProgressValue((prevValue) => Math.min(prevValue + 1, 100));
  };

  // Función para disminuir el valor de la barra de progreso horizontal
  const decreaseProgressValue = () => {
    setProgressValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  // Función para aumentar el valor de la barra de progreso circular
  const increaseCircularValue = () => {
    setCircularValue((prevValue) => Math.min(prevValue + 1, 100));
  };

  // Función para disminuir el valor de la barra de progreso circular
  const decreaseCircularValue = () => {
    setCircularValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(true);
  };

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerVisible(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <main>

      <ProgressBar value={30} maxValue={100} />

      <br />

      <CircularProgressBar value={85} maxValue={100} />

      <br />

      <ProgressBar value={progressValue} maxValue={100} />
      <div>
        <button onClick={decreaseProgressValue}>-</button>
        <span>{progressValue}</span>
        <button onClick={increaseProgressValue}>+</button>
      </div>

      <br />

      <CircularProgressBar value={circularValue} maxValue={100} />
      <div>
        <button onClick={decreaseCircularValue}>-</button>
        <span>{circularValue}</span>
        <button onClick={increaseCircularValue}>+</button>
      </div>

      <button onClick={handleShowAlert}>Mostrar Alerta</button>
      {showAlert && (
        <Alert>
          <AlertIcon icon="hola" />
          <AlertTitle>titulo</AlertTitle>
          <AlertDescription>description</AlertDescription>
          <button onClick={handleHideAlert}>Cerrar Alerta</button>
        </Alert>
      )}

      <h1>lorem</h1>
      <Accordion multiple>
        <AccordionItem index={1}>
          <AccordionButton index={1}>
            <span>Toggle 1</span>
            <AccordionIcon icon="Icono 1" index={1} />
          </AccordionButton>
          <AccordionPanel index={1}>
            Contenido del Accordion 1
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem index={2}>
          <AccordionButton index={2}>
            <span>Toggle 2</span>
            <AccordionIcon icon="Icono 2" index={2} />
          </AccordionButton>
          <AccordionPanel index={2}>
            Contenido del Accordion 2
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem index={3}>
          <AccordionButton index={3}>
            <span>Toggle 3</span>
            <AccordionIcon icon="Icono 3" index={3} />
          </AccordionButton>
          <AccordionPanel index={3}>
            Contenido del Accordion 3
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Tabs>
        <TabList>
          <Tab index={0}>One</Tab>
          <Tab index={1}>Two</Tab>
          <Tab index={2}>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel index={0}>one!</TabPanel>
          <TabPanel index={1}>two!</TabPanel>
          <TabPanel index={2}>three!</TabPanel>
        </TabPanels>
      </Tabs>


      <TextHidden as="h1">Título oculto</TextHidden>

      <Skeleton isLoaded styles={{ width: "50px", height: "20px" }}><button>hola</button></Skeleton>
      <SkeletonCircle styles={{ width: "170px", height: "170px", }}>d</SkeletonCircle>
      <SkeletonText styles={{ width: "100%", height: "16px" }}>ghjkl</SkeletonText>

      <div>
        <button onClick={handleButtonClick}>Mostrar Toast</button>
        <Toast isVisible={isVisible} duration={5000} onClose={() => setIsVisible(false)}>
          Este es un Toast dinámico
        </Toast>
      </div>

      <div>
        <div>
          <button onClick={() => setIsDrawerVisible(true)}>Abrir Drawer</button>
          <Drawer isVisible={isDrawerVisible} isRight={true} duration={1000000} onClose={handleDrawerClose} size="20%">
            Contenido del Drawer
            <DrawerCloseButton onClick={handleDrawerClose} />
          </Drawer>
        </div>
      </div>

      <div>
        <Menu className="my-menu" title="el bucho" setIsOpen={setIsMenuOpen}>
          <button>Item 1</button>
          <button>Item 2</button>
          {/* Agrega más elementos del menú según sea necesario */}
        </Menu>
      </div>
      <div>
        <button onClick={openModal}>Abrir Modal</button>

        <Modal isOpen={isOpen} width="400px" height="300px">
          <h2>Contenido del Modal</h2>
          <p>Este es el contenido del modal.</p>
          <button onClick={closeModal}>Cerrar Modal</button>
        </Modal>
      </div>

      <Badge title="Esto es un badge" />

      <Divider />

      <br />

      <Tag>
        <span>Esto es un tag</span>
      </Tag>

      <ImgTransition>
        <img src="https://grupovierci.brightspotcdn.com/dims4/default/881b679/2147483647/strip/true/crop/1080x608+0+159/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-grupo-vierci.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ff0%2F6d%2Fd997e8ec459e8ec828a054dda990%2Fcavani.jpg" />
        <img src="https://www.ole.com.ar/2024/04/22/49E3D3oeC_960x460__1.jpg" />
      </ImgTransition>

      <SimpleGallery>
        <img src="https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?cs=srgb&dl=pexels-samkolder-2387877.jpg&fm=jpg" alt="" />
        <img src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6o7SmoW2LUH0vOZzMCiHsXiSV3Er9-XGmhCBWUejXiLe5Rj5bHm5fZTq-R4Gwl3Ub-4&usqp=CAU" alt="" />
        <img src="https://i.pinimg.com/736x/a6/f3/20/a6f320de23ad2ccd5047e441a61da53c.jpg" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPq57NxsJEe1LEnzfY9n0qlDY-SrsqaALL9roafiIWPqI_8TYpAYlInh8dMwnWt6i4UE&usqp=CAU" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPRykpzHn-_XhR93fbmImaJNKIpeXTfal7lnBK78ql9duMqNJbf8wxa1G30kotw4nxx4&usqp=CAU" alt="" />
        <img src="https://w0.peakpx.com/wallpaper/265/320/HD-wallpaper-starry-night-forest-lights-winter-thumbnail.jpg" alt="" />
        <img src="https://e0.pxfuel.com/wallpapers/399/172/desktop-wallpaper-starry-sky-blue-starry-night.jpg" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lwEDPSNzx_F5t_8gNJZBLCwyqa41CUBGrzk8kEMB9rwYem5f1ZQcHz2Yh7LnM39HdFE&usqp=CAU" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9PUbN78aZY1fCPMLWKsWiBaCJ2MpeUAFqiwP6yuHN3iRqGP8b036LnGy7CzDFui45yo&usqp=CAU" alt="" />
      </SimpleGallery>
    </main>
  );
}
