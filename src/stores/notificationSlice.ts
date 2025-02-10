import {StateCreator} from 'zustand'
import { Notification } from '../types'
import { FavoritesSliceType } from './favoritesSlice'

export type notificationSliceType={
    notification:Notification
    showNotification:(payload: Pick<Notification, 'text'|'error'>)=>void
    hideNotification:()=>void
} 

export const createNotificationSlice:StateCreator<notificationSliceType&FavoritesSliceType,[],[],notificationSliceType>=(set, get)=>({
    notification:{
        text:"",
        error:false,//Se dispara en base a las acciones del usuario
        show:false,
    },

    showNotification:(payload)=>{
        set({
            notification:{
                text:payload.text,
                error:payload.error,
                show:true
            }   
        })
        setTimeout(() => {
            get().hideNotification()
        }, 2000);
    },
        hideNotification:()=>{
        set({
            notification:{
                text:"",
                error:false,
                show:false,
            }
        })
    },
    
})