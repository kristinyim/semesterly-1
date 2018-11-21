/*
Copyright (C) 2017 Semester.ly Technologies, LLC

Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

// ALERTS
export const ALERT_CONFLICT = 'ALERT_CONFLICT';
export const DISMISS_ALERT_CONFLICT = 'DISMISS_ALERT_CONFLICT';
export const ALERT_TIMETABLE_EXISTS = 'ALERT_TIMETABLE_EXISTS';
export const DISMISS_TIMETABLE_EXISTS = 'DISMISS_TIMETABLE_EXISTS';
export const ALERT_CHANGE_SEMESTER = 'ALERT_CHANGE_SEMESTER';
export const DISMISS_ALERT_CHANGE_SEMESTER = 'DISMISS_ALERT_CHANGE_SEMESTER';
export const ALERT_NEW_TIMETABLE = 'ALERT_NEW_TIMETABLE';
export const DISMISS_ALERT_NEW_TIMETABLE = 'DISMISS_ALERT_NEW_TIMETABLE';
export const ALERT_ENABLE_NOTIFICATIONS = 'ALERT_ENABLE_NOTIFICATIONS';
export const DISMISS_ENABLE_NOTIFICATIONS = 'DISMISS_ENABLE_NOTIFICATIONS';
export const CHANGE_MOST_FRIENDS_CLASS = 'CHANGE_MOST_FRIENDS_CLASS';
export const ALERT_FACEBOOK_FRIENDS = 'ALERT_FACEBOOK_FRIENDS';
export const SHOW_FACEBOOK_ALERT = 'SHOW_FACEBOOK_ALERT';
export const DISMISS_FACEBOOK_FRIENDS = 'DISMISS_FACEBOOK_FRIENDS';

// CALENDAR
export const REQUEST_SHARE_TIMETABLE_LINK = 'REQUEST_SHARE_TIMETABLE_LINK';
export const RECEIVE_SHARE_TIMETABLE_LINK = 'RECEIVE_SHARE_TIMETABLE_LINK';
export const EXPORT_SIS_TIMETABLE = 'EXPORT_SIS_TIMETABLE';

// CLASSMATES
export const CLASSMATES_RECEIVED = 'CLASSMATES_RECEIVED';
export const REQUEST_CLASSMATES = 'REQUEST_CLASSMATES';
export const REQUEST_MOST_CLASSMATES = 'REQUEST_MOST_CLASSMATES';

// COURSE INFO/MODAL DATA
export const COURSE_INFO_RECEIVED = 'COURSE_INFO_RECEIVED';
export const COURSE_CLASSMATES_RECEIVED = 'COURSE_CLASSMATES_RECEIVED';
export const REQUEST_COURSE_INFO = 'REQUEST_COURSE_INFO';
export const SET_COURSE_REACTIONS = 'SET_COURSE_REACTIONS';
export const SET_COURSE_ID = 'SET_COURSE_ID';

// COURSE SECTIONS
export const RECEIVE_COURSE_SECTIONS = 'RECEIVE_COURSE_SECTIONS';

// COURSES
export const REQUEST_COURSES = 'REQUEST_COURSES';

// CUSTOM SLOTS
export const ADD_CUSTOM_SLOT = 'ADD_CUSTOM_SLOT';
export const UPDATE_CUSTOM_SLOT = 'UPDATE_CUSTOM_SLOT';
export const REMOVE_CUSTOM_SLOT = 'REMOVE_CUSTOM_SLOT';
export const CLEAR_CUSTOM_SLOTS = 'CLEAR_CUSTOM_SLOTS';
export const RECEIVE_CUSTOM_SLOTS = 'RECEIVE_CUSTOMS_SLOTS';
export const CLEAR_CONFLICTING_EVENTS = 'CLEAR_CONFLICT_EVENTS';

// EXPLORATON & SEARCH
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const SHOW_EXPLORATION_MODAL = 'SHOW_EXPLORATION_MODAL';
export const HIDE_EXPLORATION_MODAL = 'HIDE_EXPLORATION_MODAL';
export const REQUEST_ADVANCED_SEARCH_RESULTS = 'REQUEST_ADVANCED_SEARCH_RESULTS';
export const RECEIVE_ADVANCED_SEARCH_RESULTS = 'RECEIVE_ADVANCED_SEARCH_RESULTS';
export const SET_ACTIVE_ADV_SEARCH_RESULT = 'SET_ACTIVE_ADV_SEARCH_RESULT';
export const REQUEST_SCHOOL_INFO = 'REQUEST_SCHOOL_INFO';
export const PAGINATE_ADVANCED_SEARCH_RESULTS = 'PAGINATE_ADVANCED_SEARCH_RESULTS';
export const CLEAR_ADVANCED_SEARCH_PAGINATION = 'CLEAR_ADVANCED_SEARCH_PAGINATION';

// FINAL EXAMS
export const HIDE_FINAL_EXAMS_MODAL = 'HIDE_FINAL_EXAMS_MODAL';
export const SHOW_FINAL_EXAMS_MODAL = 'SHOW_FINAL_EXAMS_MODAL';
export const FETCH_FINAL_EXAMS = 'FETCH_FINAL_EXAMS';
export const RECEIVE_FINAL_EXAMS = 'RECEIVE_FINAL_EXAMS';
export const RECEIVE_EXAMS_SHARE_LINK = 'RECEIVE_EXAMS_SHARE_LINK';
export const SET_FINAL_EXAMS_SHARED = 'SET_FINAL_EXAMS_SHARED';

// FRIENDS
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const REQUEST_FRIENDS = 'REQUEST_FRIENDS';

// INIT
export const INIT_STATE = 'INIT_STATE';

// INTEGRATIONS
export const TOGGLE_INTEGRATION_MODAL = 'TOGGLE_INTEGRATION_MODAL';
export const OPEN_INTEGRATION_MODAL = 'OPEN_INTEGRATION_MODAL';

// DEN INTEGRATIONS
export const TOGGLE_DEN_INTEGRATION_MODAL = 'TOGGLE_DEN_INTEGRATION_MODAL';
export const OPEN_DEN_INTEGRATION_MODAL = 'OPEN_DEN_INTEGRATION_MODAL';

// NOTIFICATIONS
export const TOKEN_REGISTERED = 'TOKEN_REGISTERED';
export const UNREGISTER_TOKEN = 'UNREGISTER_TOKEN';

// OPTIONAL COURSES
export const ADD_REMOVE_OPTIONAL_COURSE = 'ADD_REMOVE_OPTIONAL_COURSE';
export const REMOVE_OPTIONAL_COURSE_BY_ID = 'REMOVE_OPTIONAL_COURSE_BY_ID';
export const CLEAR_OPTIONAL_COURSES = 'CLEAR_OPTIONAL_COURSES';

// FIND FRIENDS & PEER MODAL
export const TOGGLE_PEER_MODAL = 'TOGGLE_PEER_MODAL';
export const PEER_MODAL_LOADING = 'PEER_MODAL_LOADING';
export const PEER_MODAL_LOADED = 'PEER_MODAL_LOADED';

// PREFERENCE MODAL
export const TOGGLE_PREFERENCE_MODAL = 'TOGGLE_PREFERENCE_MODAL';

// TIMETABLE PREFERENCES
export const TOGGLE_CONFLICTS = 'TOGGLE_CONFLICTS';
export const TURN_CONFLICTS_ON = 'TURN_CONFLICTS_ON';
export const SET_ALL_PREFERENCES = 'SET_ALL_PREFERENCES';
export const ADD_METRIC = 'ADD_METRIC';
export const REMOVE_METRIC = 'REMOVE_METRIC';
export const SWITCH_METRIC = 'SWITCH_METRIC';
export const TOGGLE_METRIC_ORDER = 'TOGGLE_METRIC_ORDER';

// SAVE CALENDAR MODAL
export const TOGGLE_SAVE_CALENDAR_MODAL = 'TOGGLE_SAVE_CALENDAR_MODAL';
export const TRIGGER_SAVE_CALENDAR_MODAL = 'TRIGGER_SAVE_CALENDAR_MODAL';
export const DOWNLOAD_CALENDAR = 'DOWNLOAD_CALENDAR';
export const UPLOAD_CALENDAR = 'UPLOAD_CALENDAR';
export const CALENDAR_DOWNLOADED = 'CALENDAR_DOWNLOADED';
export const CALENDAR_UPLOADED = 'CALENDAR_UPLOADED';

// SAVING TIMETABLE
export const REQUEST_SAVE_TIMETABLE = 'REQUEST_SAVE_TIMETABLE';
export const CHANGE_ACTIVE_SAVED_TIMETABLE = 'CHANGE_ACTIVE_SAVED_TIMETABLE';
export const CHANGE_ACTIVE_SAVED_TIMETABLE_NAME = 'CHANGE_ACTIVE_SAVED_TIMETABLE_NAME';

// SCHOOLS
export const RECEIVE_SCHOOL_INFO = 'RECEIVE_SCHOOL_INFO';

// SEARCH RESULTS
export const RECEIVE_COURSES = 'RECEIVE_COURSES';

// SEMESTER
export const SET_SEMESTER = 'SET_SEMESTER';

// SIGNUP MODAL REDUCER
export const TOGGLE_SIGNUP_MODAL = 'TOGGLE_SIGNUP_MODAL';
export const TRIGGER_SIGNUP_MODAL = 'TRIGGER_SIGNUP_MODAL';

// TEXTBOOK MODAL
export const TOGGLE_TEXTBOOK_MODAL = 'TOGGLE_TEXTBOOK_MODAL';
export const TRIGGER_TEXTBOOK_MODAL = 'TRIGGER_TEXTBOOK_MODAL';

// TIMETABLES
export const LOADING_CACHED_TT = 'LOADING_CACHED_TT';
export const CACHED_TT_LOADED = 'CACHED_TT_LOADED';
export const REQUEST_TIMETABLES = 'REQUEST_TIMETABLES';
export const RECEIVE_TIMETABLES = 'RECEIVE_TIMETABLES';
export const HOVER_SECTION = 'HOVER_SECTION';
export const UNHOVER_SECTION = 'UNHOVER_SECTION';
export const CHANGE_ACTIVE_TIMETABLE = 'CHANGE_ACTIVE_TIMETABLE';
export const UPDATE_LAST_COURSE_ADDED = 'UPDATE_LAST_COURSE_ADDED';

// UI
export const HOVER_SEARCH_RESULT = 'HOVER_SEARCH_RESULT';
export const SET_HIGHLIGHT_NOTIFS = 'SET_HIGHLIGHT_NOTIFS';

// USER ACQUISITON MODAL
export const TOGGLE_ACQUISITION_MODAL = 'TOGGLE_ACQUISITION_MODAL';
export const TRIGGER_ACQUISITION_MODAL = 'TRIGGER_ACQUISITION_MODAL';

// USER INFO
export const OVERRIDE_SETTINGS_SHOW = 'OVERRIDE_SETTINGS_SHOW';
export const OVERRIDE_SETTINGS_HIDE = 'OVERRIDE_SETTINGS_HIDE';
export const REQUEST_SAVE_USER_INFO = 'REQUEST_SAVE_USER_INFO';
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
export const RECEIVE_USER_INFO_SAVED = 'RECEIVE_USER_INFO_SAVED';
export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const RECEIVE_SAVED_TIMETABLES = 'RECEIVE_SAVED_TIMETABLES';
export const SET_SETTINGS_MODAL_VISIBLE = 'SET_SETTINGS_MODAL_VISIBLE';
export const SET_SETTINGS_MODAL_HIDDEN = 'SET_SETTINGS_MODAL_HIDDEN';
export const DELETED_ACCOUNT = 'DELETED_ACCOUNT';

// TOS
export const TRIGGER_TOS_MODAL = 'TRIGGER_TOS_MODAL';
export const TRIGGER_TOS_BANNER = 'TRIGGER_TOS_BANNER';
export const DISMISS_TOS_BANNER = 'DISMISS_TOS_BANNER';
export const CLOSE_TOS_MODAL = 'CLOSE_TOS_MODAL';
