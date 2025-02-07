import { Dialog, Transition, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useApStore';
import { arrayIngredientsAndMesures } from '../types';
export default function Modal() {
    const {modal, closeModal, details, handleClickFavorite, deleteFavoriteList}=useAppStore()

    if (!details.length) {
        return; 
    }

    const renderIngredients=()=>{
      
        let ingredients:JSX.Element[]=[]
        for(let i=1; i<=6; i++){
            const ingredient=details[0][`strIngredient${i}` as keyof arrayIngredientsAndMesures]
            console.log(ingredient)
            const measure= details[0][`strMeasure${i}` as keyof arrayIngredientsAndMesures];
            if(ingredient&&measure){
                ingredients.push(<li key={i} className="list-disc list-inside">{ingredient} - {measure}</li>)
            }
        }
        return ingredients
    }
   
    return (
        <>

          <Transition appear show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={()=>closeModal()}>
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/70" />
              </TransitionChild>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                      <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                          {details[0].strDrink}
                      </DialogTitle>
                      <img src={details[0].strDrinkThumb} alt={details[0].strDrink}/>
                      <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                            Ingredientes y Cantidades
                      </DialogTitle>
                    
                        {renderIngredients()}
                  
                      <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                        Instrucciones
                      </DialogTitle>
                      <p>{details[0].strInstructions}</p>

                      <div className="container__buttons">
                          <button className='container__cerrar' onClick={closeModal}>Cerrar</button>
                          <button className='container__favorites' onClick={()=>handleClickFavorite(details[0])}>{deleteFavoriteList(details[0].idDrink)?'Eliminar de favoritos':'Agregar a favoritos'}</button>
                        </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )
    }