/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import {
  getAlbum, getAlbumTracks, getAlbums,
} from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubbedFetch;

  beforeEach(() => {
    stubbedFetch = sinon.stub(global, 'fetch');
    stubbedFetch.resolves({ json: () => ({ data: 'json' }) });
  });
  afterEach(() => {
    stubbedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });

    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      getAlbum();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      getAlbum('4aawyAB9cmqN3');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9cmqN3');

      getAlbum('4aawyAB9cmqNK');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9cmqNK');
    });

    it('should return the correct data from Promise', () => {
      const artists = getAlbum('4aawyAB9cmqN3');

      artists.then((data) => {
        expect(data).to.be.eql({ data: 'json' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      getAlbums();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      getAlbums(['4aawyAB9cmqN3', '4aawyAB9cmqN3']);
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9cmqN3,4aawyAB9cmqN3');
    });

    it('should return the correct data from Promise', () => {
      const artists = getAlbums(['4aawyAB9cmqN3', '4aawyAB9cmqN3']);

      artists.then((data) => {
        expect(data).to.be.eql({ data: 'json' });
      });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      getAlbumTracks();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      getAlbumTracks('4aawyAB9cmqN3');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9cmqN3/tracks');
    });

    it('should return the correct data from Promise', () => {
      const artists = getAlbumTracks('4aawyAB9cmqN3');

      artists.then((data) => {
        expect(data).to.be.eql({ data: 'json' });
      });
    });
  });
});
