// Import Actions here:


// Initialize State
const INITIAL_STATE = {
  pending: false
};

//Switch Function For Actions
export default function(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    case {/* Action Goes Here */}:
      return {
        ...state,

      };
      break;
    case {/* Action Goes Here */}:
      return {
        ...state,

      };
      break;
    case {/* Action Goes Here */}:
      return {
        ...state,

      };
      break;
    case {/* Action Goes Here */}:
      return {
        ...state,
        
      };
      break;
    
    //Default State Return
    default: {
      return state;
    }
  }
}
