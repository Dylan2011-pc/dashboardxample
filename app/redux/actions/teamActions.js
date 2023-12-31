import {SET_API_DATA} from '../constants/teamConstants';
import {SET_USER_API_DATA} from "../constants/userConstants";
import {SET_API_DATA_MANAGER} from "../constants/managerConstants";
import {SET_DEPARTMENT_DATA} from "../constants/departmentConstants";

export const setTeam = (data) => {
    return {
        type: SET_API_DATA,
        payload: data,
    };
  };

export const setManager = (data) => {
    return {
        type: SET_API_DATA_MANAGER,
        payload: data
    }
};

export const setUsers = (data) => {
    return {
        type: SET_USER_API_DATA,
        payload: data
    }
};

export const setDepartments = (data) => {
    return {
        type: SET_DEPARTMENT_DATA,
        payload: data
    }
}