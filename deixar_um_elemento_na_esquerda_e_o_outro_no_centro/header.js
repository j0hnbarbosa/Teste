import React from 'react';
import moment from 'moment';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  TableCell,
  TableRow,
  TableHead,
} from '@material-ui/core';

const styles = {
  alignchevronLeft: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },
  chevronLeftStyle: {
    display: 'inline',
    margin: '0px',
    padding: '0px',
    cursor: 'pointer',
  },
  tableCellStyle: {
    paddingRight: '0px',
    minWidth: '150px',
  },
  container: {
    padding: '0px',
    width: '100%',
    justifyItems: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  dataTexto: {
    fontSize: '15px',
    wordBreak: 'unset',
  },
  alinhaEsquerda: {
    marginLeft: 'auto',
  },
  chevronRightStyle: {
    display: 'inline',
    margin: '0px',
    padding: '0px',
    cursor: 'pointer',
  },
};

const DiaSemana = ({ classes, chamaDados, diasSemana }) => {
  const hoje = moment().format('DD/MM/YYYY');
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableCellStyle}>
          <div className={classes.alignchevronLeft}>
            <ChevronLeft
              onClick={() => chamaDados('left')}
              className={classes.chevronLeftStyle}
            />
          </div>

        </TableCell>
        {diasSemana.length > 0 && diasSemana[0].dados.map((vlr, index) => (
          <TableCell
            className={classes.tableCellStyle}
            key={vlr}
          >
            <div
              className={classes.container}
            >
              <div
                className={classes.dataTexto}
              >
                {moment(vlr).format('DD/MM')}
                { hoje === moment(vlr).format('DD/MM/YYYY') && <div>Hoje</div>}
              </div>

              <div className={classes.alinhaEsquerda}>
                {index === diasSemana[0].dados.length - 1
                  && (
                  <div>
                    <ChevronRight
                      onClick={() => chamaDados('right')}
                      className={classes.chevronRightStyle}
                    />
                  </div>
                  )
                  }
              </div>
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

DiaSemana.propTypes = {
  chamaDados: PropTypes.func.isRequired,
  diasSemana: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiaSemana);
