import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();
const reload = server.reload;

gulp.task('serve', () => {
  server.init({ server: 'src' });
  gulp.watch('src/**').on('change', reload);
});
