
import { acf_setShowProjectSelect } from "../../../pages/login";

const initialState = {
	
};

function reducerPageWorkPlanProjectTarget(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}


const mapStateToProps = (state) => {
	return { ...state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setShowProjectSelect: (status) => {
			dispatch(acf_setShowProjectSelect(status));
		},
	};
};

export {
    reducerPageWorkPlanProjectTarget,
    mapStateToProps,
    mapDispatchToProps
};
