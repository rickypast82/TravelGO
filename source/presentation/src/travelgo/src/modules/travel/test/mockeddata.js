//@flow
import { List } from 'immutable'
import { type TravelRecordType, TravelRecord} from '../reducer'

export const TRAVEL_NAMES:List<string> = List(['Rome','New York','Bangkok']);

export const TRAVEL_STATE:TravelRecordType = TravelRecord({
    names: TRAVEL_NAMES
})