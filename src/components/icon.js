import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Icon = ({ icon, prefix }) => <FontAwesomeIcon icon={[prefix, icon]} size="lg" />;

export default Icon;
