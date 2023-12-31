// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/giftcards`
  | `/help`
  | `/host/homes`
  | `/login`
  | `/release`
  | `/reset-password`
  | `/rooms/:id`

export type Params = {
  '/rooms/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
