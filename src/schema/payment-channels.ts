import Joi from '@hapi/joi';

/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
/**
 * 5.4.1.2 Pre-selecting Payment ChannelsDragonpay has very basic support
 * to allow merchant to go directly to a payment channel without having
 * to select it from the dropdown list.  The following are sample processor
 * id’swhich can be used to go straight to the selection:
 */
export type PaymentChannel =
  | 'BAYD'
  | 'BITC'
  | 'CC'
  | 'CEBL'
  | 'CUP'
  | 'DPAY'
  | 'ECPY'
  | 'GCSH'
  | 'LBC'
  | 'PYPL'
  | 'MLH'
  | 'RDS'
  | 'SMR'
  | 'BOL'
  | '711';

export const PAYMENT_CHANNEL = Joi.string()
  .trim()
  .valid(
    'BAYD',
    'BITC',
    'CC',
    'CEBL',
    'CUP',
    'DPAY',
    'ECPY',
    'GCSH',
    'LBC',
    'PYPL',
    'MLH',
    'RDS',
    'SMR',
    'BOL',
    '711',
  )
  .optional();

/**
 * 5.4.1.1 Filtering Payment Channels
 *
 * Dragonpay payment channels are grouped together by type –ex.
 * Online banking, Over-the-Counter/ATM, etc.  Merchants can
 * programmatically instruct Dragonpay which grouping to show
 * when the user is redirected to the payment gateway by using
 * the “mode” parameter.
 */
export type PaymentMode = number;

export const PAYMENT_MODE = Joi.number()
  .positive()
  .max(4095)
  .optional();
